using System;
using System.Collections.Generic;
using System.Text;

namespace Manager.People.Domain.Entities
{
    public class Entity
    {
        public Entity() => GUID = Guid.NewGuid();
        public int Id { get; protected set; }
        public Guid GUID { get; protected set; }

    }
}
