#pragma strict

var arm : GameObject;
var henDownP1 = 0;
var henDownP3 = 0;
var winCounter = 0;

var henFlutter : Transform;
var chickenSound : Transform;
var winSound : Transform;

private var louie : GameObject;

private var Henp1 : GameObject;
//private var Henp3 : GameObject;

var henClones = new Array();

function Start ()
{
	Henp1 = GameObject.Find("Henp1");
	//Henp3 = GameObject.Find("Henp3");

	louie = GameObject.Find("Louie");
}

function Update ()
{
	for (var henClone : Transform in henClones)
	{
		henClone.Translate(Vector3.up * Time.deltaTime * 3, Space.World);
	}
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
		Invoke("CreateFlyingHen", 0.3);

		ChickenCrash();
	}
	else if(col.gameObject.name == "Henp3")
	{
		henDownP3++;
		Invoke("CreateFlyingHen", 0.3);

		ChickenCrash();
	}

	if(henDownP1 == 3 || henDownP3 == 3)
	{
		if(winCounter == 0)
		{
			winCounter++;
			Invoke("StopPlane", 2);
		}
		else
		{
			//do stuff
		}
	}

	print(henDownP3);
}

function CreateFlyingHen()
{
	var henClone : Transform = Instantiate(henFlutter, transform.position, Quaternion.identity);
	henClones.Push(henClone);
	henClone.transform.parent = Henp1.transform;
}

function ChickenCrash()
{
	var chickenCrash : Transform = Instantiate(chickenSound, transform.position, Quaternion.identity);
	chickenCrash.transform.parent = Henp1.transform;
}

function StopPlane()
{
	louie.GetComponent.<arm>().tmpVar = 0;

	var win : Transform = Instantiate(winSound, transform.position, Quaternion.identity);
	win.transform.parent = Henp1.transform;
}