'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
*/

const Route = use('Route')


Route.get('/', 'IndexController.index')

// Login routes
Route.get('logout', 'LoginController.logout')
Route.get('facebook/login', 'LoginController.facebookRedirect')
Route.get('facebook/callback', 'LoginController.handleFacebookCallback')

Route.group('auth-routes', () => {
    Route.post('release/:id/increment_hype', 'HypeController.increment')
}).middleware('auth')

// Admin routes
Route.group('admin-routes', () => {
    Route.get('add-release', 'ReleaseController.showAddForm')
    Route.post('add-release', 'ReleaseController.addRelease')
}).middleware('admin')
