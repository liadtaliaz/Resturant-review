using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

namespace Resturant_review
{
    public partial class register_page : System.Web.UI.Page
    {
        string name, password, gender, pref,
            chineese,mexican, burgers, italian, french, thai, meats, sandwiches, pizza, indian, pastries, 
            bakeryShop, fastFood, coffeeShop, casualDining, fastCasual,
            vegan, cosher, vegaterian, celiac, lactosIntolerance;
        protected void Page_Load(object sender, EventArgs e)
        {
           
                name = Request.Form["UserName"];
                password = Request.Form["Password"];
                gender = Request.Form["gender"];
                pref = Request.Form["preferences"];
                chineese = Request.Form["chineese"];
                mexican = Request.Form["mexican"];
                burgers = Request.Form["burgers"];
                italian = Request.Form["italian"];
                french = Request.Form["french"];
                thai = Request.Form["thai"];
                meats = Request.Form["meats"];
                sandwiches = Request.Form["sandwiches"];
                pizza = Request.Form["pizza"];
                indian = Request.Form["indian"];
                pastries = Request.Form["pastries"];
                bakeryShop = Request.Form["bakery Shop"];
                fastFood = Request.Form["fast food"];
                coffeeShop = Request.Form["coffee Shop"];
                casualDining = Request.Form["casual dining"];
                fastCasual = Request.Form["fast casual"];
                vegan = Request.Form["vegan"];
                cosher = Request.Form["cosher"];
                vegaterian = Request.Form["vegaterian"];
                celiac = Request.Form["celiac"];
                lactosIntolerance = Request.Form["lactose intolerance"];


            


        }
    }
}