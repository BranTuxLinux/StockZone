"use client";

import {  useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  company?: string;
}

export default function UserList() {
  const [users, setUsers] = useState<IUser[]>([]); // Estado para almacenar los usuarios
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los usuarios
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        const data = await response.json();
        const dt: IUser[] = data.data;
        console.log(data);
        setLoading(false);
        setUsers(dt); // Actualizamos el estado con los usuarios obtenidos
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); // Llamada a la función de obtención de usuarios
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <main className=" h-[100vh] flex justify-center items-center">
      <Card className="w-full max-w-4xl mx-auto ">
        <CardHeader>
          <CardTitle>Lista de Usuarios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Button size="icon">
              <SearchIcon className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Compañía</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <LoadingTable />
              ) : (
                <LocalItem currentUsers={currentUsers} />
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="flex items-center space-x-2">
              <p className="text-sm text-muted-foreground">
                Mostrando {indexOfFirstUser + 1}-
                {Math.min(indexOfLastUser, filteredUsers.length)} de{" "}
                {filteredUsers.length}
              </p>
              <Select
                value={usersPerPage.toString()}
                onValueChange={(value) => {
                  setUsersPerPage(Number(value));
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seleccionar cantidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 por página</SelectItem>
                  <SelectItem value="10">10 por página</SelectItem>
                  <SelectItem value="20">20 por página</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="h-4 w-4 mr-2" />
                Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Siguiente
                <ChevronRightIcon className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
const LoadingTable = () => {
  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(
      <TableRow key={i}>
        <TableCell colSpan={4} align="center">
          <Skeleton className="h-4 w-full" />
        </TableCell>
      </TableRow>
    );
  }

  return <>{rows}</>;
};
type LocalItemProps = {
  currentUsers: IUser[];
};
const LocalItem = ({ currentUsers }: LocalItemProps) => {
  return currentUsers.map((user) => (
    <TableRow key={user._id}>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Badge variant={user.role === "admin" ? "default" : "secondary"}>
          {user.role}
        </Badge>
      </TableCell>
      <TableCell>{user.company || "N/A"}</TableCell>
    </TableRow>
  ));
};
