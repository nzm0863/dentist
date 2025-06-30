import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

export default {
  setup() {
    const skills: Ref<string[]> = ref([]);

    onMounted(async () => {
      const res = await fetch('/wp-json/wp/v2/skill');
      const data = await res.json();
      skills.value = data.map((item: any) => item.title.rendered as string);
    });

    return { skills };
  }
}