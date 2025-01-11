/*
You have a UserRole list that is used to classify users in your application.
You want to create a RoleDescription object that maps each user role to its description.
*/

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};

// 2.7
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
