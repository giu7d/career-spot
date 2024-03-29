﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    [Table("candidate")]
    public class Candidate
    {
        [Key]
        [Column("CandidateId", TypeName = "int")]
        public int Id { get; set; }

        [Required]
        [Column("CandidateName", TypeName = "nvarchar(max)")]
        public string Name { get; set; }

        [Required]
        [Column("CandidateEmail", TypeName = "nvarchar(max)")]
        public string Email { get; set; }

        [Required]
        [Column("CandidateCity", TypeName = "nvarchar(max)")]
        public string City { get; set; }

        [Required]
        [Column("CandidateState", TypeName = "nvarchar(max)")]
        public string Estate { get; set; }

        [Required]
        [Column("CandidateCountry", TypeName = "nvarchar(max)")]
        public string Country { get; set; }

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("IdFile", TypeName = "uniqueidentifier ROWGUIDCOL")]
        public Guid FileId { get; set; }

        [Required]
        [Column("CandidateCV", TypeName = "varbinary(max) FILESTREAM")]
        public byte[] CurriculumVitae { get; set; }
    }
}
