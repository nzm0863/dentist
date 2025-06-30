function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        textAlign: "center",
        padding: "24px 0",
        background: "#f8f9fa",
        color: "#888",
        marginTop: "40px",
      }}
    >
      © {new Date().getFullYear()} Nakamura. All rights reserved.
    </footer>
  );
}

export default Footer;
