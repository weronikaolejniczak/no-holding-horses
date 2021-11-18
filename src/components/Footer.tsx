export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        bottom: 0,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
      }}
    >
      Weronika Olejniczak © {year}
    </footer>
  );
};
