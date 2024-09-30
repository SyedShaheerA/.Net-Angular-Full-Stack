using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : Controller
    {
        private readonly IConfiguration _configuration;


        public CustomerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        //to read data
        [HttpGet]
        public JsonResult Get()
        {
            String query = @"select CustomerID, SalespersonID, CustomerName, ArabicName,
            TaxRegistrationNumber, convert(varchar(10),TaxRegistrationDate,120) as TaxRegistrationDate , CRNumber,
            PrimaryContact, BranchID, MobileNumber, Email,
            Website, TaxID, PaymentTerms, Statuss, CountryID,
            CityID, Region, Street, Area, AdditionalStreet,
            AdditionalNumber, BuildingNumber, UnitNumb, PostalCode from dbo.Customer;";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Customer cmp)
        {
            String query = @"INSERT INTO dbo.Customer (
            CustomerID, SalespersonID, CustomerName, ArabicName,
            TaxRegistrationNumber, TaxRegistrationDate, CRNumber,
            PrimaryContact, BranchID, MobileNumber, Email,
            Website, TaxID, PaymentTerms, Statuss, CountryID,
            CityID, Region, Street, Area, AdditionalStreet,
            AdditionalNumber, BuildingNumber, UnitNumb, PostalCode
            ) VALUES (
            '" + cmp.CustomerID+ @"', '"+cmp.SalespersonID+@"', '"+cmp.CustomerName+@"', '"+cmp.ArabicName+ @"',
            '"+cmp.TaxRegistrationNumber+ @"', '"+cmp.TaxRegistrationDate+ @"', '"+cmp.CRNumber+ @"',
            '"+cmp.PrimaryContact+ @"', '"+cmp.BranchID+ @"', '"+cmp.MobileNumber+ @"', '"+cmp.Email+ @"',
            '"+cmp.Website+ @"', '"+cmp.TaxID+@"', '" + cmp.PaymentTerms + @"', '" + cmp.Statuss + @"',
            '" + cmp.CountryId + @"', '" + cmp.CityId + @"', '" + cmp.Region +@"', '" + cmp.Street + @"', '" + cmp.Area + @"', '" + cmp.AdditionalStreet + @"',
            '" + cmp.AdditionalNumber + @"', '" + cmp.BuildingNumber + @"','" + cmp.UnitNumb + @"', '" + cmp.PostalCode + @"'
            );
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Customer cmp)
        {
            String query = @"UPDATE dbo.Customer SET 
    SalespersonID = '" + cmp.SalespersonID + @"',
    CustomerName = '" + cmp.CustomerName + @"',
    ArabicName = '" + cmp.ArabicName + @"',
    TaxRegistrationNumber = '" + cmp.TaxRegistrationNumber + @"',
    TaxRegistrationDate = '" + cmp.TaxRegistrationDate + @"',
    CRNumber = '" + cmp.CRNumber + @"',
    PrimaryContact = '" + cmp.PrimaryContact + @"',
    BranchID = '" + cmp.BranchID + @"',
    MobileNumber = '" + cmp.MobileNumber + @"',
    Email = '" + cmp.Email + @"',
    Website = '" + cmp.Website + @"',
    TaxID = '" + cmp.TaxID + @"',
    PaymentTerms = '" + cmp.PaymentTerms + @"',
    Statuss = '" + cmp.Statuss + @"',
    CountryID = '" + cmp.CountryId + @"',
    CityID = '" + cmp.CityId + @"',
    Region = '" + cmp.Region + @"',
    Street = '" + cmp.Street + @"',
    Area = '" + cmp.Area + @"',
    AdditionalStreet = '" + cmp.AdditionalStreet + @"',
    AdditionalNumber = '" + cmp.AdditionalNumber + @"',
    BuildingNumber = '" + cmp.BuildingNumber + @"',
    UnitNumb = '" + cmp.UnitNumb + @"',
    PostalCode = '" + cmp.PostalCode + @"'
WHERE CustomerID = '" + cmp.CustomerID + @"';
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("updated Successfully");
        }

        [HttpDelete("(id)")]
        public JsonResult Delete(int id)
        {
            String query = @"
            delete dbo.Customer where CustomerID=" + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }


    }


}
