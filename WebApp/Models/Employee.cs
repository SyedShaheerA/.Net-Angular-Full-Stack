namespace WebApp.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public required string EmployeeName { get; set; }
        public required string Department { get; set; }  

        public required string DateOfJoining { get; set; }  

    }
}
