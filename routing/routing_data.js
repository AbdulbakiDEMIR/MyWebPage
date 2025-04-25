import { HomePage } from "/pages/home_page.js";
import { AdminHomePage } from "/pages/admin/home_page.js";
import { AdminPage} from "/pages/admin/admin_page.js";
import { ProjectDetailPage } from "/pages/project_detail_page.js";
import { data } from "/data/data.js";

export const routing_data = [
    {
        path:"/",
        page: () => HomePage(data)
    },
    {
        path:"/admin",
        // page: () => AdminPage()
        page: () => AdminHomePage(data)
    },
    {
        path:"/project_detail",
        page: () => ProjectDetailPage()
    }




]