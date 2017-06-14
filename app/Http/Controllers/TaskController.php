<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    /**
     * The task repository instance.
     *
     */
    protected $tasks;

    public function __construct()
    {
        $this->middleware('auth');

        // $this->tasks = $tasks;
    }

    public function index()
	{
    	// return view('tasks.index');
    	// $tasks = $request->user()->tasks()->get();
    	// $tasks = Task::all();
	    // return view('tasks.index', compact('tasks'));
        return view('react');

	}

	public function store()
	{
    	$this->validate(request(), [

        	'name' => 'required|max:255',
    	]);
    	
    	Task::create([

    		'user_id' => auth()->id(),
    		'name' => request('name'),
    	]);
    	
    	return redirect('/tasks');

    	// $name = auth()->id();
    	// dd($name);
	}

    public function destroy(Request $request, Task $task)
	{
	    $task = Task::find($task->id);
	    $task->delete();

    	return redirect('/tasks');
	}

}
