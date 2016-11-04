<?php

namespace Custom\UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UsersController extends Controller
{
    public function getUsersAction()
    {
        $users = $this->getDoctrine()
            ->getRepository('CustomUserBundle:User')
            ->findAll();

        return ['users' => $users];
    }

    public function getUserAction($id)
    {
        $user = $this->getDoctrine()
            ->getRepository('CustomUserBundle:User')
            ->find($id);

        if (!$user) {
            throw $this->createNotFoundException();
        }

        return ['user' => $user];
    }
}
