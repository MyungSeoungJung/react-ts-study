import { Route } from "react-router-dom";
import PostList from ".";
import { lazy } from "react";
// import ProfileEdit from "@/modules/profile/ProfilesEdit";

const ProfileEdit = lazy(() => import("@/modules/profile/ProfilesEdit"));

export const postRoutes = [
  <Route key="posts" path="posts" element={<PostList />} />,
  <Route key="profile/edit" path="profile/edit" element={<ProfileEdit />} />,
];
