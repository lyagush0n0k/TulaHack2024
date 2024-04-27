import { Head, useForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import AdminLayout from '@/Layouts/AdminLayout';
import React, { FormEventHandler, useRef, useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useQuery } from 'react-query';
import { debounce } from "lodash";
import Select, { InputActionMeta } from 'react-select';
import FileInput from '@/Components/FileInput';
import PrimaryButton from '@/Components/PrimaryButton';

const performSearchRequest = async (searchText: string) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${searchText ? searchText : ''}`
  )

  let responseData = await response.json();

  // @ts-ignore
  return responseData.map((item, index) => {
    return {label: item.display_name, value: {address: item.display_name, lon: item.lon, lat: item.lat}};
  });
}

export default function Create({ auth }: PageProps) {
  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    name: '',
    address: {address: '', lon: '', lat: ''},
    info: '',
    files: []
  });

  const [inputText, setInputText] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')

  const { isLoading, error, data: dataQuery } = useQuery(
    searchText ? ['addresses', searchText] : ['addresses'],
    async () => await performSearchRequest(searchText),
    {
      enabled: !!searchText,
    }
  )

  const handleSearchDebounced = useRef(
    debounce((searchText) => setSearchText(searchText), 300)
  ).current

  const handleInputChange = (inputText: string, meta: InputActionMeta) => {
    if (meta.action !== 'input-blur' && meta.action !== 'menu-close') {
      setInputText(inputText)
      handleSearchDebounced(inputText)
    }
  }

  const changeAddress = (value: any) => {
    setData('address', value.value);
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('admin.restaurants.store'));
  };


  return (
    <AdminLayout
      user={auth.user}
    >
      <Head title="Создание ресторана" />

      <div className="py-12">
        <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-2">
              <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                  <InputLabel htmlFor="name" value="Название"/>

                  <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                    isFocused
                    autoComplete="name"
                  />

                  <InputError className="mt-2" message={errors.name}/>
                </div>

                <div>
                  <InputLabel htmlFor="address" value="Адрес"/>

                  <Select
                    options={dataQuery}
                    inputValue={inputText}
                    onInputChange={handleInputChange}
                    filterOption={null}
                    required={true}
                    // @ts-ignore
                    onChange={changeAddress}
                  />

                  <InputError className="mt-2" message={errors.address}/>
                </div>

                <div>
                  <InputLabel htmlFor="gallery" value="Галерея"/>

                  <FileInput
                    id='files[]'
                    className="mt-1 block w-full"
                    multiple
                    onChange={(e) => {
                      console.log(e.target.files)
                      // @ts-ignore
                      setData('files', e.target.files);
                    }}
                  />

                  <InputError className="mt-2" message={errors.files}/>
                </div>

                <div>
                  <InputLabel htmlFor="info" value="Информация"/>
                  <textarea
                    required
                    className='border-gray-300 w-full focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                    rows={5}
                    onChange={(e) => setData('info', e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <PrimaryButton>Save</PrimaryButton>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
