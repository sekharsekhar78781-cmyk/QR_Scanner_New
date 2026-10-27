
// import { useEffect, useState } from "react";
// import {
//   LayoutDashboard,
//   UtensilsCrossed,
//   QrCode,
//   ShoppingBag,
//   IndianRupee,
//   TrendingUp,
//   Users,
//   Bell,
//   Search,
//   ArrowUpRight,
//   ChefHat,
// } from "lucide-react";

// import API from "../api";


// function Dashboard() {
//   const [activePage, setActivePage] = useState("Dashboard");
//   const [menuCount, setMenuCount] = useState(0);
//   const [menuError, setMenuError] = useState("");

//   const navigation = [
//     { label: "Dashboard", icon: LayoutDashboard },
//     { label: "Menu Management", icon: UtensilsCrossed },
//     { label: "Tables & QR", icon: QrCode },
//     { label: "Orders", icon: ShoppingBag },
//     { label: "Sales & Reports", icon: TrendingUp },
//     { label: "Customers", icon: Users },
//   ];

//   useEffect(() => {
//     API.get("/tables/1/menu")
//       .then((response) => {
//         setMenuCount(
//           Array.isArray(response.data) ? response.data.length : 0
//         );
//         setMenuError("");
//       })
//       .catch(() => {
//         setMenuError("Unable to load menu data");
//       });
//   }, []);

//   const stats = [
//     {
//       title: "Menu Items",
//       value: menuError ? "—" : menuCount,
//       note: "Items in your menu",
//       icon: UtensilsCrossed,
//     },
//     {
//       title: "Table QR Codes",
//       value: "Manage",
//       note: "Generate table QR codes",
//       icon: QrCode,
//     },
//     {
//       title: "Orders Today",
//       value: "—",
//       note: "Orders API not connected",
//       icon: ShoppingBag,
//     },
//     {
//       title: "Today's Revenue",
//       value: "—",
//       note: "Sales API not connected",
//       icon: IndianRupee,
//     },
//   ];

//   return (
//     <div className="admin-layout">
//       <aside className="sidebar">
//         <div className="brand">
//           <div className="brand-icon">
//             <ChefHat size={25} />
//           </div>
//           <div>
//             <h2>Velvet Table</h2>
//             <p>RESTAURANT ADMIN</p>
//           </div>
//         </div>

//         <p className="nav-heading">WORKSPACE</p>

//         <nav className="sidebar-nav">
//           {navigation.map(({ label, icon: Icon }) => (
//             <button
//               key={label}
//               className={`nav-link ${
//                 activePage === label ? "active" : ""
//               }`}
//               onClick={() => setActivePage(label)}
//             >
//               <Icon size={19} />
//               <span>{label}</span>
//               {activePage === label && (
//                 <span className="active-dot" />
//               )}
//             </button>
//           ))}
//         </nav>

//         <div className="sidebar-footer">
//           <div className="admin-avatar">CS</div>
//           <div>
//             <h4>Restaurant Admin</h4>
//             <p>Management Panel</p>
//           </div>
//         </div>
//       </aside>

//       <main className="admin-main">
//         <header className="topbar">
//           <div className="breadcrumb">
//             <span>Workspace</span>
//             <span>/</span>
//             <strong>{activePage}</strong>
//           </div>

//           <div className="topbar-actions">
//             <label className="search-box">
//               <Search size={17} />
//               <input placeholder="Search dashboard..." />
//             </label>

//             <button className="icon-button" aria-label="Notifications">
//               <Bell size={19} />
//             </button>

//             <div className="topbar-avatar">CS</div>
//           </div>
//         </header>

//         <section className="dashboard-content">
//           <div className="welcome-row">
//             <div>
//               <p className="eyebrow">RESTAURANT OVERVIEW</p>
//               <h1>{activePage}</h1>
//               <p className="welcome-text">
//                 Welcome back! Here is your restaurant workspace.
//               </p>
//             </div>

//             <span className="status-badge">
//               <span /> Admin Workspace
//             </span>
//           </div>

//           {activePage === "Dashboard" ? (
//             <>
//               <div className="section-heading">
//                 <div>
//                   <h2>Today's Overview</h2>
//                   <p>Your restaurant at a glance</p>
//                 </div>
//               </div>

//               <div className="stats-grid">
//                 {stats.map(({ title, value, note, icon: Icon }) => (
//                   <article className="stat-card" key={title}>
//                     <div className="stat-top">
//                       <span className="stat-icon">
//                         <Icon size={21} />
//                       </span>
//                       <ArrowUpRight size={17} className="stat-arrow" />
//                     </div>
//                     <p className="stat-title">{title}</p>
//                     <h3>{value}</h3>
//                     <p className="stat-note">{note}</p>
//                   </article>
//                 ))}
//               </div>

//               {menuError && (
//                 <p className="error-message">
//                   {menuError}. Check your backend and database connection.
//                 </p>
//               )}

//               <div className="dashboard-panels">
//                 <section className="panel welcome-panel">
//                   <div className="panel-label">YOUR RESTAURANT</div>
//                   <h2>Every detail, beautifully managed.</h2>
//                   <p>
//                     Manage your menu, create table QR codes, and prepare
//                     your restaurant for a smooth digital dining experience.
//                   </p>
//                   <button
//                     className="primary-button"
//                     onClick={() => setActivePage("Menu Management")}
//                   >
//                     Manage Menu <ArrowUpRight size={17} />
//                   </button>
//                 </section>

//                 <section className="panel quick-panel">
//                   <h2>Quick Actions</h2>
//                   <p className="panel-subtitle">
//                     Common tasks, one click away.
//                   </p>

//                   <button
//                     className="quick-action"
//                     onClick={() => setActivePage("Menu Management")}
//                   >
//                     <span className="quick-icon">
//                       <UtensilsCrossed size={19} />
//                     </span>
//                     <span>
//                       <strong>View Menu</strong>
//                       <small>Check menu items</small>
//                     </span>
//                     <ArrowUpRight size={17} />
//                   </button>

//                   <button
//                     className="quick-action"
//                     onClick={() => setActivePage("Tables & QR")}
//                   >
//                     <span className="quick-icon">
//                       <QrCode size={19} />
//                     </span>
//                     <span>
//                       <strong>Generate Table QR</strong>
//                       <small>Create a QR code for a table</small>
//                     </span>
//                     <ArrowUpRight size={17} />
//                   </button>
//                 </section>
//               </div>
//             </>
//           ) : (
//             <section className="panel page-placeholder">
//               <div className="placeholder-icon">
//                 {activePage === "Tables & QR" ? (
//                   <QrCode size={30} />
//                 ) : (
//                   <ChefHat size={30} />
//                 )}
//               </div>
//               <h2>{activePage}</h2>
//               <p>
//                 Dashboard layout is ready. We will connect this section
//                 to the appropriate backend API next.
//               </p>
//             </section>
//           )}

//           <footer className="dashboard-footer">
//             Velvet Table · Restaurant Management
//           </footer>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Dashboard;




import { useEffect, useState } from "react";
import { UtensilsCrossed, QrCode, ShoppingBag, IndianRupee } from "lucide-react";
import API from "../api";

function Dashboard() {
  const [menuCount, setMenuCount] = useState(0);
  const [menuError, setMenuError] = useState("");

  useEffect(() => {
    API.get("/tables/1/menu")
      .then((response) => {
        setMenuCount(
          Array.isArray(response.data) ? response.data.length : 0
        );
      })
      .catch(() => {
        setMenuError("Unable to load menu data");
      });
  }, []);

  const stats = [
    {
      title: "Menu Items",
      value: menuError ? "—" : menuCount,
      icon: UtensilsCrossed,
    },
    {
      title: "Table QR Codes",
      value: "Manage",
      icon: QrCode,
    },
    {
      title: "Orders Today",
      value: "—",
      icon: ShoppingBag,
    },
    {
      title: "Today's Revenue",
      value: "—",
      icon: IndianRupee,
    },
  ];

  return (
    <div className="dashboard-content">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">RESTAURANT OVERVIEW</p>
          <h1>Dashboard</h1>
          <p className="welcome-text">
            Welcome back! Manage your restaurant here.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map(({ title, value, icon: Icon }) => (
          <article className="stat-card" key={title}>
            <div className="stat-top">
              <span className="stat-icon">
                <Icon size={22} />
              </span>
            </div>

            <p className="stat-title">{title}</p>
            <h3>{value}</h3>
          </article>
        ))}
      </div>

      {menuError && (
        <p className="error-message">
          {menuError}. Check your backend connection.
        </p>
      )}

      <section className="panel welcome-panel">
        <h2>Welcome to Velvet Table</h2>
        <p>
          Manage menu items and generate QR codes for your restaurant tables.
        </p>
      </section>
    </div>
  );
}

export default Dashboard;
