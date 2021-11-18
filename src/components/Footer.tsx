import { EColors } from 'constants/EColors';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        alignItems: 'center',
        backgroundColor: EColors.surface,
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
