using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestroomManagement.ViewModels
{
    public class Checklist
    {
        public int U_ID { get; set; }
        public int ShiftId { get; set; }
        public bool IsDone { get; set; }
        public string Feedback { get; set; }

        public string ReadingDate { get; }
    }
}