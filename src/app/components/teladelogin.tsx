interface TelaDeLoginProps {
  link: string;
  texto?: string;
}

const TelaDeLogin: React.FC<TelaDeLoginProps> = ({ link, texto }) => {
  return (
    <>
      <button>entrar no site</button>
    </>
  );
};

export default TelaDeLogin;
