using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Modes.Menu.Dto
{
    public class MenuDto
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public string Icon { get; set; }
        public string RouterLink { get; set; }
        public List<MenuDto> Items { get; set; }
    }
}
