import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const View = {
    template: "<router-view></router-view>",
};

const routes = [
    {
        path: "/",
        component: () => import("@pages/Layout/DashboardLayout.vue"),
        redirect: "dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("@pages/Dashboard.vue"),
                meta: { title: "global.dashboard" },
            },
            {
                path: "user-management",
                name: "user_management",
                component: View,
                redirect: { name: "permissions.index" },
                children: [
                    {
                        path: "permissions",
                        name: "permissions.index",
                        component: () => import("@cruds/Permissions/Index.vue"),
                        meta: { title: "cruds.permission.title" },
                    },
                    {
                        path: "permissions/create",
                        name: "permissions.create",
                        component: () =>
                            import("@cruds/Permissions/Create.vue"),
                        meta: { title: "cruds.permission.title" },
                    },
                    {
                        path: "permissions/:id",
                        name: "permissions.show",
                        component: () => import("@cruds/Permissions/Show.vue"),
                        meta: { title: "cruds.permission.title" },
                    },
                    {
                        path: "permissions/:id/edit",
                        name: "permissions.edit",
                        component: () => import("@cruds/Permissions/Edit.vue"),
                        meta: { title: "cruds.permission.title" },
                    },
                    {
                        path: "roles",
                        name: "roles.index",
                        component: () => import("@cruds/Roles/Index.vue"),
                        meta: { title: "cruds.role.title" },
                    },
                    {
                        path: "roles/create",
                        name: "roles.create",
                        component: () => import("@cruds/Roles/Create.vue"),
                        meta: { title: "cruds.role.title" },
                    },
                    {
                        path: "roles/:id",
                        name: "roles.show",
                        component: () => import("@cruds/Roles/Show.vue"),
                        meta: { title: "cruds.role.title" },
                    },
                    {
                        path: "roles/:id/edit",
                        name: "roles.edit",
                        component: () => import("@cruds/Roles/Edit.vue"),
                        meta: { title: "cruds.role.title" },
                    },
                    {
                        path: "users",
                        name: "users.index",
                        component: () => import("@cruds/Users/Index.vue"),
                        meta: { title: "cruds.user.title" },
                    },
                    {
                        path: "users/create",
                        name: "users.create",
                        component: () => import("@cruds/Users/Create.vue"),
                        meta: { title: "cruds.user.title" },
                    },
                    {
                        path: "users/:id",
                        name: "users.show",
                        component: () => import("@cruds/Users/Show.vue"),
                        meta: { title: "cruds.user.title" },
                    },
                    {
                        path: "users/:id/edit",
                        name: "users.edit",
                        component: () => import("@cruds/Users/Edit.vue"),
                        meta: { title: "cruds.user.title" },
                    },
                ],
            },
            {
                path: "faq-management",
                name: "faq_management",
                component: View,
                redirect: { name: "faq_categories.index" },
                children: [
                    {
                        path: "faq-categories",
                        name: "faq_categories.index",
                        component: () =>
                            import("@cruds/FaqCategories/Index.vue"),
                        meta: { title: "cruds.faqCategory.title" },
                    },
                    {
                        path: "faq-categories/create",
                        name: "faq_categories.create",
                        component: () =>
                            import("@cruds/FaqCategories/Create.vue"),
                        meta: { title: "cruds.faqCategory.title" },
                    },
                    {
                        path: "faq-categories/:id",
                        name: "faq_categories.show",
                        component: () =>
                            import("@cruds/FaqCategories/Show.vue"),
                        meta: { title: "cruds.faqCategory.title" },
                    },
                    {
                        path: "faq-categories/:id/edit",
                        name: "faq_categories.edit",
                        component: () =>
                            import("@cruds/FaqCategories/Edit.vue"),
                        meta: { title: "cruds.faqCategory.title" },
                    },
                    {
                        path: "faq-questions",
                        name: "faq_questions.index",
                        component: () =>
                            import("@cruds/FaqQuestions/Index.vue"),
                        meta: { title: "cruds.faqQuestion.title" },
                    },
                    {
                        path: "faq-questions/create",
                        name: "faq_questions.create",
                        component: () =>
                            import("@cruds/FaqQuestions/Create.vue"),
                        meta: { title: "cruds.faqQuestion.title" },
                    },
                    {
                        path: "faq-questions/:id",
                        name: "faq_questions.show",
                        component: () => import("@cruds/FaqQuestions/Show.vue"),
                        meta: { title: "cruds.faqQuestion.title" },
                    },
                    {
                        path: "faq-questions/:id/edit",
                        name: "faq_questions.edit",
                        component: () => import("@cruds/FaqQuestions/Edit.vue"),
                        meta: { title: "cruds.faqQuestion.title" },
                    },
                ],
            },
        ],
    },
];

export default new VueRouter({ mode: "history", base: "/admin", routes });
