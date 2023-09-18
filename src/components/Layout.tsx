interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <main>{children}</main>
        <footer>
          <p>My Company</p>
        </footer>
      </header>
    </div>
  );
};

export default Layout;
