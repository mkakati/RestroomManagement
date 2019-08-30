using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestroomManagement.ViewModels
{
    public class Shift
    {
        public int ShiftId { get; set;}

        public string ShiftName { get; set; }

        public string StartTime { get; set; }

        public string EndTime { get; set; }

        public Nullable<bool> IsDeleted { get; set; }

        public Nullable<bool> IsActive { get; set; }

        public Nullable<System.DateTime> CreatedDate { get; set; }

        public Nullable<System.DateTime> ModifiedDate { get; set; }

        public string CreatedBy { get; set; }

        public string ModifiedBy { get; set; }
    }
}

