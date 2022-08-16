<?php

namespace App\Http\Requests\Sale;

use Illuminate\Foundation\Http\FormRequest;

class SaleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'date'=> ['required'],
            'GrandTotal'=>['required','number'],
            'client_id' => ['required'],
            'warehouse_id' => ['required'],
            'status'=> ['required'],
            'details' => ['required'],
            'payment' => ['required']

        ];
    }
}
