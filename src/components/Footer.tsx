export const Footer = () => {
  return (
    <footer className="w-full h-auto px-10 pb-4">
      <section className="w-full flex justify-between items-center pt-1.5 text-black font-bold ">
        <div className="w-full">
          <strong className="pointer-events-none">Turttle Login</strong>
          <hgroup className="w-full flex justify-between">
            <p className="pointer-events-none">
              Copyright &copy; 2004-2024 - Todos los derechos reservados.
            </p>
            <p className="pointer-events-none">
              <strong className="hover:underline">Christian Parisca</strong>.
            </p>
          </hgroup>
        </div>
      </section>
    </footer>
  );
};
