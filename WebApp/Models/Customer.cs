namespace WebApp.Models
{
    public class Customer
    {
        public int CustomerID { get; set; }
        public int SalespersonID { get; set; }

        public required string CustomerName { get; set; }

        public required string ArabicName { get; set; }

        public required string TaxRegistrationNumber { get; set; }

        public required string TaxRegistrationDate { get; set; }

        public required string CRNumber { get; set; }

        public required string PrimaryContact {  get; set; }

        public int BranchID { get; set; }   

        public required string MobileNumber { get; set; }

        public required string Email { get; set; }

        public required string Website {  get; set; }

        public required string TaxID { get; set; }

        public required string PaymentTerms { get; set; }   

        public int Statuss { get; set; }

        public int CountryId { get; set; }

        public int CityId {  get; set; }

        public required string Region {  get; set; }

        public required string Street { get; set; }
        
        public required string Area { get; set; }

        public required string AdditionalStreet { get; set; }

        public required string AdditionalNumber { get; set; }

        public required string BuildingNumber { get; set; }

        public required string UnitNumb { get; set; }

        public required string PostalCode { get; set; }


    }
}
