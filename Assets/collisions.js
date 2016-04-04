#pragma strict

var arm : GameObject;
var henDownP1 = 0;
var henDownP3 = 0;

var henFlutter : Transform;

var Henp1 : GameObject;
Henp1 = GameObject.Find("Henp1");

var Henp3 : GameObject;
Henp3 = GameObject.Find("Henp3");

function Start ()
{
}

function Update ()
{
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.name == "Player 1" || col.gameObject.name == "Player 3")
	{
    	arm.GetComponent.<Animation>().Play('jump');
	}
	else if(col.gameObject.name == "Henp1")
	{

		henDownP1++;
		var henCloneP1 : GameObject = Instantiate(henFlutter, transform.position, Quaternion.identity) as GameObject;
		henCloneP1.transform.parent = Henp1.transform;

	}
	else if(col.gameObject.name == "Henp3")
	{
		henDownP3++;
		var henCloneP3 : GameObject = Instantiate(henFlutter, transform.position, Quaternion.identity) as GameObject;
		henCloneP3.transform.parent = Henp3.transform;

	}

	// if()

	print(henDownP3);
}