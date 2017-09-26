﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class File
    {
        [Required]
        [Column("CandidateCV", TypeName = "varbinary(1000)")]
        public byte[] CurriculumVitae { get; set; }

        [Column("CandidateSendTime", TypeName = "datetime")]
        public DateTime SendTime { get; set; }
    }
}
