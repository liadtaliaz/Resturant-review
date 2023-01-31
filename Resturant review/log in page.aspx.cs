using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Resturant_review
{
    public partial class log_in_page : System.Web.UI.Page
    {
        string name, password;
        protected void Page_Load(object sender, EventArgs e)
        {
            if(IsPostBack)
            {
                name = Request.Form["username"];
                password = Request.Form["password"];
            }
        }
    }
}