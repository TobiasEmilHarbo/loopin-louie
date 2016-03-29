#pragma strict

private var head : Transform;

function Start ()
{
	head = GameObject.Find("Louie").transform;
}

function Update ()
{
	transform.eulerAngles.y = head.eulerAngles.y;
	print(head.eulerAngles.y);
}