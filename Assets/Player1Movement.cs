using UnityEngine;
using System.Collections;

public class Player1Movement : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            transform.position += new Vector3(0,1,0);
		}
	}
}
