<?php
/**
 * Created by PhpStorm.
 * User: jason
 * Date: 2017-03-22
 * Time: 10:53 AM
 */

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class PagesController extends Controller
{

    protected function contact(){
        return view('pages.contactus');
    }

    protected function about(){
        return view('pages.aboutus');
    }
}