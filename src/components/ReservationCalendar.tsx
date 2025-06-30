import React, { useEffect, useState } from 'react';

interface Reservation {
  id: number;
  name: string;
  date: string;
  time_slot: '午前' | '午後';
  content: string;
}

type TimeSlot = '午前' | '午後';

const weekdays = ['日', '月', '火', '水', '木', '金', '土'];

function getCalendarDates(): string[] {
  const today = new Date();
  const todayW = today.getDay();
  const start = new Date(today);
  start.setDate(today.getDate() - todayW);
  const dates: string[] = [];
  for (let i = 0; i <= 30; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}

const ReservationCalendar: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot>('午前');
  const [form, setForm] = useState({ name: '', date: '', time_slot: '午前', content: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://www.nnzzm.com/sigotoru1/api/reservations.php')
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  const calendarDates = getCalendarDates();
  // 予約状況をマップ化
  const reservedMap: Record<string, Record<TimeSlot, boolean>> = {};
  reservations.forEach(r => {
    if (!reservedMap[r.date]) reservedMap[r.date] = { '午前': false, '午後': false };
    reservedMap[r.date][r.time_slot] = true;
  });

  // 日付・時間帯選択時
  const handleSelect = (date: string, slot: TimeSlot) => {
    setSelectedDate(date);
    setSelectedSlot(slot);
    setForm(f => ({ ...f, date, time_slot: slot }));
  };

  // フォーム入力
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  // 予約追加
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time_slot || !form.content) {
      setMessage('すべて入力してください');
      return;
    }
    const res = await fetch('https://www.nnzzm.com/sigotoru1/api/add_reservation.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setMessage('予約を追加しました');
      setForm({ name: '', date: '', time_slot: '午前', content: '' });
      setSelectedDate('');
      setSelectedSlot('午前');
      // 再取得
      fetch('https://www.nnzzm.com/sigotoru1/api/reservations.php')
        .then(res => res.json())
        .then(data => setReservations(data));
    } else {
      setMessage('エラーが発生しました');
    }
  };

  const todayStr = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <div className="reservation-calendar-container" id="reservation-calendar-container">
        <h2 className="reservation-headline">予約カレンダー</h2>
        <div style={{ fontWeight: 'bold', color: '#1a8c7a', marginBottom: 10 }}>
          選択中：{selectedDate ? `${selectedDate} ${selectedSlot}` : '未選択'}
        </div>
        <div className="reservation-calendar-scroll">
          <table className="reservation-calendar-table">
            <thead>
              <tr>
                {weekdays.map(w => (
                  <th key={w}>{w}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(() => {
                const rows = [];
                for (let i = 0; i < calendarDates.length; i += 7) {
                  rows.push(
                    <tr key={i}>
                      {calendarDates.slice(i, i + 7).map((date) => {
                        const isPast = date < todayStr;
                        return (
                          <td key={date} className={selectedDate === date ? 'selected-cell' : ''}>
                            {['午前', '午後'].map(slot => {
                              const isReserved = reservedMap[date]?.[slot as TimeSlot];
                              const isSelected = selectedDate === date && selectedSlot === slot;
                              return (
                                <div key={slot} style={{ marginBottom: 6 }}>
                                  <div style={{ fontSize: 14 }}>{date} ({slot})</div>
                                  {isReserved ? (
                                    <span style={{ color: 'red' }}>×（予約あり）</span>
                                  ) : (
                                    <button
                                      type="button"
                                      className={`reservation-btn${isSelected ? ' selected' : ''}`}
                                      disabled={isPast}
                                      onClick={() => handleSelect(date, slot as TimeSlot)}
                                    >
                                      {isSelected ? '選択中' : '〇（空き）'}
                                    </button>
                                  )}
                                </div>
                              );
                            })}
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody>
          </table>
        </div>
        <form onSubmit={handleSubmit} className="reservation-form-container">
          <h2>予約</h2>
          <div style={{ marginBottom: 16 }}>
            名前: <input type="text" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: 16 }}>
            日付: <div style={{ display: 'inline-block', marginLeft: 8 }}>{form.date || '未選択'}</div>
          </div>
          <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
            <span>時間帯:</span>
            <div style={{ display: 'inline-block' }}>{form.time_slot || '未選択'}</div>
          </div>
          <div style={{ marginBottom: 16 }}>
            内容: <input type="text" name="content" value={form.content} onChange={handleChange} />
          </div>
          <button type="submit">予約追加</button>
          {message && <div className="message" style={{ color: message.includes('追加') ? '#1a8c7a' : 'red', marginTop: 12, textAlign: 'center' }}>{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default ReservationCalendar; 