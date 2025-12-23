import { Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import '../styles/AppLayout.css'

export default function AppLayout() {
  return (
    <div className="app-layout">
      <PageHeader />
      <main className="page-body">
        <Outlet />
      </main>
    </div>
  );
}
