<?php
/**
 * Created by PhpStorm.
 * User: md101
 * Date: 04.11.16
 * Time: 03:11
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class BackController extends Controller
{
    /**
     * @Route("/back", name="backend")
     */
    public function indexAction(Request $request)
    {
        echo 123;die;
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ));
    }
}