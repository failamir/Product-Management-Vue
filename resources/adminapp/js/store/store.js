import Vue from 'vue'
import Vuex from 'vuex'

import FaqCategoriesIndex from './cruds/FaqCategories'
import FaqCategoriesSingle from './cruds/FaqCategories/single'
import FaqQuestionsIndex from './cruds/FaqQuestions'
import FaqQuestionsSingle from './cruds/FaqQuestions/single'
import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import Alert from './modules/alert'
import I18NStore from './modules/i18n'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules : {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    FaqCategoriesIndex,
    FaqCategoriesSingle,
    FaqQuestionsIndex,
    FaqQuestionsSingle
  },
  strict : debug
})
