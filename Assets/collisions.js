#pragma strict

var arm : GameObject;
var henDownP1 = 0;
var henDownP3 = 0;

var henFlutter : Transform;

private var Henp1 : GameObject;
private var Henp3 : GameObject;

function Start ()
{
	Henp1 = GameObject.Find("Henp1");
	Henp3 = GameObject.Find("Henp3");
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
		var henCloneP1 : Transform = Instantiate(henFlutter, transform.position, Quaternion.identity);
		henCloneP1.transform.parent = Henp1.transform;

		//henCloneP1.GetComponent.<Animation>().Play("henAway");

	}
	else if(col.gameObject.name == "Henp3")
	{
		henDownP3++;
		var henCloneP3 : Transform = Instantiate(henFlutter, transform.position, Quaternion.identity);
		henCloneP3.transform.parent = Henp3.transform;

	}

	// if()

	print(henDownP3);
}