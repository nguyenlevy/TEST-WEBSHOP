using System.ComponentModel.DataAnnotations.Schema;

namespace Common.Modes.Menu
{
    [Table("Menus")]
    public class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public string RouterLink { get; set; }
        public int? Parent { get; set; }
        public int? OrderNumber { get; set; }
        public string Icon { get; set; }
    }
}
