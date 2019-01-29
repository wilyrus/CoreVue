using System;
using System.Collections.Generic;

namespace Corevue.Data
{
    public class KanbanCard
    {
        public string Id { set; get; }

        public string Title { set; get; }

        public string Description { get; set; }
    }

    public class KanbanColumn
    {
        public string Id { set; get; }

        public string Title { set; get; }

        public string Description { get; set; }

        public List<KanbanCard> Cards { get; set; }
    }

    public class KanbanProject
    {
        public string Id { set; get; }

        public string Name { set; get; }

        public string Description { get; set; }

        public string Icon { set; get; }

        public DateTime? Date { set; get; }

        public List<KanbanCard> Cards { get; set; }
    }
}
