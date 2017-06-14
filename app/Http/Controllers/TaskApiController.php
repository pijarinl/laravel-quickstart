<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Log;
use Auth;

class TaskApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        //
        $tasks = Task::all();
        $test = 'test';
        return response()->json([
            'tasks' => $tasks,
        ]);
        // return view('react');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        $id = Auth::guard('api')->user()->id;
        Log::info($id);

        $input = $request->input("task");
        $task = new Task;
        $task->name = $input;
        $task->user_id = $id;
        $task->save();

        return response()->json([
            'task' => $task
        ]);
    }

    
    public function edit($id)
    {
        //
    }

    
    public function destroy(Request $request,$taskId)
    {
        //
        $task = Task::where('id',$taskId)->first();

        $task->delete();
        return response()->json([
            'task'=>$task
        ]);
    }
}
