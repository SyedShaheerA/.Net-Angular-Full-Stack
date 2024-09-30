namespace WebApp.Models
{
    public class City
    {
        public int CityID {  get; set; }
        public required string CityName { get; set; }

        public int CountryID { get; set; }
    }
}
