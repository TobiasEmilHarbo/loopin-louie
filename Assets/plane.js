#pragma strict

private var louie : Transform;

private var first;
private var second;
private var third;
private var fourth;

function Start ()
{
	louie = GameObject.Find("Louie").transform;
	first = true;
	second = true;
	third = true;
	fourth = true;
}

function Update ()
{
	var rotation = louie.eulerAngles.y;
	// print(rotation);
	
	if(rotation <= 360 && rotation > 270 && first)
	{
		first = false;
		second = true;
		GetComponent.<Animation>().Play('flyLeft');
		// print('left');
	}
	else if(rotation <= 270 && rotation > 180 && second)
	{
		second = false;
		third = true;
		GetComponent.<Animation>().Play('flyRight');
		// print('right');
	}
	else if(rotation <= 180 && rotation > 90 && third)
	{
		third = false;
		fourth = true;
		GetComponent.<Animation>().Play('flyLeft');
		// print('left');
	}
	else if(rotation <= 90 && rotation > 0 && fourth)
	{
		fourth = false;
		first = true;
		GetComponent.<Animation>().Play('flyRight');
		// print('right');
	}

	// if(rotation > 270 && first)
	// {
	// 	print('left');
	// 	first = false;
	// 	fourth = true;
	// }
	// else if(rotation > 180 && second)
	// {
	// 	second = false;
	// 	print('right');
	// }
	// else if(rotation > 90 && third)
	// {
	// 	third = false;
	// 	print('left');
	// }
	// else if(rotation > 0 && fourth)
	// {
	// 	fourth = false;

	// 	first = true;
	// 	second = true;
	// 	third = true;
	// 	print('right');
	// }
	// transform.eulerAngles.y = louie.eulerAngles.y;
	// print(head.eulerAngles.y);

}