import { MdAdminPanelSettings } from "react-icons/md";
import me from "../assets/me.jpg";
import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.1k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
    ],
  },

  {
    id: "eccommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "product", label: "All Tasks" },
      { id: "orders", label: "To Do" },
      { id: "customers", label: "Completed" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "823",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
    count: "823",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    badge: "10",
  },
  {
    id: "calendars",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
    submenu: [
      { id: "general", label: "General" },
      { id: "security", label: "Security" },
      { id: "notifications", label: "Notifications" },
    ],
  },
];

function Sidebar({ onToggle, onPageChange, currentPage, collapsed }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));
  // const [openbar, setOpenbar] = useState("");
function toogleExpanded(itemId){
  const newExpanded = new Set(expandedItems);
  // }If it’s open → close it.
  if (newExpanded.has(itemId)) {
  newExpanded.delete(itemId);
  }
// If it’s closed → open it."
 else {
  newExpanded.add(itemId);
}
setExpandedItems(newExpanded);
}
  return (
    <div
      className={`${collapsed ? "w-20" : "w-48"} h-screen  bg-white shadow-sm`}
    >
      <MdAdminPanelSettings
        size={40}
        className=" ml-6 text-blue-700 relative top-5 "
      />
      {!collapsed && (
        <div className="relative left-15 bottom-5 ">
          <h1 className="text-sm font-bold ml-2">REINA</h1>
          <p className="text-sm ml-2">Admin Panel</p>
        </div>
      )}
      {/* icons */}
      {menuItems.map((items) => (
        <div key={items.id} className="text-sm">
          <button
                className={` -mt-1
                  flex items-center gap-2 m-2 rounded-lg h-12
                  ${collapsed ? "justify-center w-12 relative top-11" : " "}
                  ${
                    currentPage === items.id || items.active
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "hover:bg-gray-100"
                  }
                `}
             onClick={() => {
             if (items.submenu) {
                toogleExpanded(items.id)
             } else {
              onPageChange(items.id)
             }
          }}
          >
            <div className=" flex gap-2 px-1 ml-2">
              <items.icon />
              {/* conditional rendering */}
             {!collapsed && (
            <div>
               <span className="font-bold">{items.label}</span>
              {items.badge && (<span className="bg-red-500 text-white px-2 py-1 rounded-lg">
                  {items.badge}</span>
              )}
              {items.count && (
                <span className="bg-gray-200 text-white px-2 py-1 rounded-lg">
                  {items.count}
                </span>
              )}
            </div>
             )}
          
              {!collapsed && items.submenu && <ChevronDown />}
            </div>
          </button>
          {/* subMenu */}
          <ul>
            {!collapsed && items.submenu && expandedItems.has(items.id) && (
              <div>
                {items.submenu.map((subitems) => (
                  <li key={subitems.id}>
                    <button className="ml-10 hover:bg-gray-200 hover:rounded-sm hover:px-1">{subitems.label}</button>
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      ))}
      {/* profile */}
     
      <div className="relative left-2 top-3">
        <img
          src={me}
          alt="user"
          className={`${collapsed ? "relative top-8 left-1": ""} w-10 h-10 rounded-full ring-2 ring-blue-400 `}
        />
         {!collapsed &&  (
        <div className="relative left-12 bottom-10">
          <h1 className="text-sm font-bold">Temi Olu</h1>
          <p className="text-sm">Adminstrator</p>
        </div>
        )}
      </div>
      
    </div>
  );
}

export default Sidebar;
