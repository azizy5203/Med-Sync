import { Edit, Trash2 } from "lucide-react";
import { DataTable } from "@/components/tables/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "@/vendors/axios";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <span className="flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="icon">
            <Edit
              size={20}
              color="hsl(var(--primary))"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon">
            <Trash2
              size={20}
              color="hsl(var(--destructive))"
            />
          </Button>
        </span>
      );
    },
  },
];

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await axios.get("users/GetAll");
      setUsers(data);
    }

    load();
  }, []);
  return (
    <div className="border border-primary">
      <DataTable
        columns={columns}
        data={users}
      />
    </div>
  );
}

export default Users;
