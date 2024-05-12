import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Reviews | Sudharsan",
  description: "User can give feedback about Sudharsan",
};

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar appTitle={"Sudharsan"} />

      <div>{children}</div>
    </div>
  );
}
