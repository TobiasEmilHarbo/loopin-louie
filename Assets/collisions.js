#pragma strict

var arm : GameObject;
var henDownP1 = 0;
var henDownP3 = 0;

var henFlutter : Transform;

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
	else if(col.gameObject.name == "Hen p1")
	{
		henDownP1++;
		Instantiate(henFlutter, Vector3(0,0,0), Quaternion.identity);
	}
	else if(col.gameObject.name == "Hen p3")
	{
		henDownP3++;
		Instantiate(henFlutter, Vector3(0,0,0), Quaternion.identity);
	}

	// if()

	print(henDownP3);
}