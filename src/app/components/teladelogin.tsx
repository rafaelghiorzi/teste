 interface TelaDeLoginProps {
    link: string;
    texto?: string;
 }
 
 
 const TelaDeLogin: React.FC<TelaDeLoginProps> = ({link, texto}) => {
  return (
    <>
    <a href={link}>visitar site</a>
    </>
  );

 }

  export default TelaDeLogin;