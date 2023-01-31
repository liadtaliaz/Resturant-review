<%@ Page Title="" Language="C#" MasterPageFile="~/masterpage.Master" AutoEventWireup="true" CodeBehind="register page.aspx.cs" Inherits="Resturant_review.register_page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="scripts/register%20JavaScript.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <center>
    <a href="log%20in%20page.aspx">already have an acount? log in</a>
    <br />
    <br />
    <label>UserName:</label>
    <input type="text" name="UserName" id="UserName" oninput="checkName()" />
    <br />
    <div id="UserNameDiv"></div>
    <label>Password:</label>
    <input type="password" name="Password" id="Password" oninput="checkConfirmPassword()" />
    <br />
    <div id="PasswordDiv"></div>
    <label>Confirm Password:</label>
    <input type="password" name="ConfirmPassword" id="ConfirmPassword" oninput="checkPassword()" />
    <br />
    <div id="ConfirmPasswordDiv"></div>
    <br />
    <label>Email:</label>
    <input type="text" name="mail" id="mail" oninput="checkMail()" />
    <br />
    <div id="mailDiv"></div>

    <label>gender:</label>
    <select name="gender" id="gender" onsubmit="checkSelect()">
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
    </select>
    <br />
    <div id="genderDiv"></div>
    <label>Birthday:</label>
    <input type="date" name="birthday" id="birthday" onsubmit="checkBirthday()">
    <div id="birthdayDiv"></div>


    <p>What type of food do you like?(optional)</p>

    <input type="checkbox" name="chineese" value="chineese">
    <label>chineese</label><br>

    <input type="checkbox" name="mexican" value="mexican">
    <label>mexican</label><br>
    <input type="checkbox" name="italian" value="italian">
    <label>italian</label><br>
    <input type="checkbox" name="french" value="french">
    <label>french</label><br>
    <input type="checkbox" name="thai" value="thai">
    <label>thai</label><br>
    <input type="checkbox" name="meats" value="meats">
    <label>meats</label><br>
    <input type="checkbox" name="sandwiches" value="sandwiches">
    <label>sandwiches</label><br>
    <input type="checkbox" name="pizza" value="pizza">
    <label>pizza</label><br>
    <input type="checkbox" name="indian" value="indian">
    <label>indian</label><br>
    <input type="checkbox" name="pastries" value="pastries">
    <label>pastries</label><br>
    <input type="checkbox" name="burgers" value="burgers">
    <label>burgers</label><br>
    <br />

    <p>What type of resturants do you like?(optional)</p>
    <input type="checkbox" name="fast food" value="fast food">
    <label>fast food</label><br>
    <input type="checkbox" name="coffee shop" value="coffee shop">
    <label>coffee shops</label><br>
    <input type="checkbox" name="casual dining" value="casual dining">
    <label>casual dining</label><br>
    <input type="checkbox" name="fast casual" value="fast casual">
    <label>fast casual</label><br>
    <input type="checkbox" name="pastries" value="pastries">
    <label>pastries</label><br>
    <input type="checkbox" name="burgers" value="burgers">
    <label>burgers</label><br>
    <input type="checkbox" name="bakery shop" value="bakery shop">
    <label>bakery shop</label><br>
    <br />

    <p>Do you have any preferences?</p>
    <input type="radio" name="preferences" value="yes" id="yes" onsubmit="checkRadio()">
    <label>yes</label>
    <input type="radio" name="preferences" value="no" id="no" onsubmit="checkRadio()">
    <label>no</label>
    <br />
    <p>What are your food preferences (optional)</p>
    <input type="checkbox" name="vegan" value="vegan">
    <label>vegan</label><br>
    <input type="checkbox" name="cosher" value="cosher">
    <label>cosher</label><br>
    <input type="checkbox" name="vegaterian" value="vegaterian">
    <label>vegaterian</label><br>
    <input type="checkbox" name="celiac" value="celiac">
    <label>celiac</label><br>
    <input type="checkbox" name="lactose intolerance" value="lactose intolerance">
    <label>lactose intolerance</label><br>
    <br />
    <input type="button" value="send" onclick="return checkRegister()">
    <input type="reset" value="delete" />
        </center>

</asp:Content>
