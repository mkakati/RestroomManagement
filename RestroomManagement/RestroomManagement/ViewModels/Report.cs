using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestroomManagement.ViewModels
{
    public partial class Report
    {
        public int U_ID { get; set; }
        public string Name { get; set; }
        public Nullable<System.DateTime> ReadingDate { get; set; }
        public string IsDone { get; set; }
        public int ShiftId { get; set; }
        public string ShiftName { get; set; }
        public string Feedback { get; set; }
    }
}