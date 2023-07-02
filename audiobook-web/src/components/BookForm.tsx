"use client";

import { FieldArray, Form, Formik } from "formik";
import React from "react";
import { FormField } from "./FormField";
import SelectField, { SelectValue } from "./SelectField";
import Button from "./Button";
import { ArrowUpTrayIcon, PlusIcon } from "@heroicons/react/24/outline";

interface ChapterData {
  name: string;
  section: string;
  time: number;
  audioUrls: string[];
  imageUrls: string[];
}

interface BookFormData {
  name: string;
  description: string;
  language: SelectValue;
  genre: SelectValue;
  coverImgs: string[];
  chapters: ChapterData[];
}

export const BookForm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate", id: 1 },
    { value: "strawberry", label: "Strawberry", id: 2 },
    { value: "vanilla", label: "Vanilla", id: 3 },
  ];

  return (
    <div className="w-full h-full p-4">
      <div className="flex flex-col">
        <Formik<BookFormData>
          initialValues={{
            name: "",
            description: "",
            language: { id: 1 },
            genre: { id: 1 },
            coverImgs: [""],
            chapters: [
              {
                audioUrls: [""],
                imageUrls: [""],
                name: "",
                section: "",
                time: 0,
              },
            ],
          }}
          onSubmit={(values) => {}}
        >
          {({ values }) => (
            <Form className="flex flex-col">
              <div className="flex justify-between">
                <div className="flex flex-col w-1/3 p-4">
                  <div className="w-full h-96 bg-gray-200 rounded-lg flex justify-center items-center">
                    <ArrowUpTrayIcon className="h-20 w-20 text-gray-600" />
                  </div>
                </div>
                <div className="flex flex-col w-2/3">
                  <FormField name="name" placeholder="Book name" title="Name" />
                  <FormField
                    name="description"
                    placeholder="Book Description"
                    title="Description"
                  />
                  <SelectField
                    name="language"
                    values={options}
                    onChange={(value) => {}}
                    selected={{ id: 1 }}
                    title="Language"
                  />
                  <div className="my-2 border-b pb-2">
                    <FieldArray name="coverImgs">
                      {({ push, remove }) => (
                        <div>
                          <div className="flex justify-between items-center border-b pb-2">
                            <span>Cover Images</span>
                            <Button
                              target={() => push("")}
                              type="button"
                              btnType="button"
                              text="Image Url"
                              icon={<PlusIcon className="w-4 h-4" />}
                            />
                          </div>
                          {values.coverImgs.length > 0 &&
                            values.coverImgs.map((coverImg, idx) => (
                              <FormField
                                key={idx}
                                name={`coverImgs.${idx}`}
                                placeholder="Cover image URL"
                                title="Image URL"
                              />
                            ))}
                        </div>
                      )}
                    </FieldArray>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="w-full">
                      <SelectField
                        name="Author"
                        values={options}
                        onChange={(value) => {}}
                        selected={{ id: 1 }}
                        title="Author"
                      />
                    </div>
                    <div className="w-fit">
                      <Button
                        target={() => {}}
                        type="button"
                        btnType="button"
                        text="Author"
                        icon={<PlusIcon className="w-4 h-4" />}
                      />
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="w-full">
                      <SelectField
                        name="genre"
                        values={options}
                        onChange={(value) => {}}
                        selected={{ id: 1 }}
                        title="Genre"
                      />
                    </div>
                    <div className="w-fit">
                      <Button
                        target={() => {}}
                        type="button"
                        btnType="button"
                        text="Genre"
                        icon={<PlusIcon className="w-4 h-4" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-4">
                <FieldArray name="chapters">
                  {(chapterFA) => (
                    <div className="my-4">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span>Chapters</span>
                        <Button
                          target={() => chapterFA.push({})}
                          type="button"
                          btnType="button"
                          text="Chapter"
                          icon={<PlusIcon className="w-4 h-4" />}
                        />
                      </div>
                      {values.chapters.length > 0 &&
                        values.chapters.map((chapter, c_idx) => (
                          <div
                            key={c_idx}
                            className="w-full border rounded-md flex flex-col p-4 my-2"
                          >
                            <FormField
                              name={`chapters.${c_idx}.name`}
                              placeholder="Chapter name"
                              title="Name"
                            />
                            <div className="flex gap-2">
                              <FormField
                                name={`chapters.${c_idx}.section`}
                                placeholder="Section ID"
                                title="Section ID"
                              />
                              <FormField
                                name={`chapters.${c_idx}.time`}
                                placeholder="Duration Time"
                                title="Duration"
                              />
                            </div>
                            <div className="my-2 border-b pb-2">
                              <FieldArray name={`chapters.${c_idx}.imageUrls`}>
                                {(imgFA) => (
                                  <div className="flex flex-col">
                                    <div className="flex justify-between items-center border-b pb-2">
                                      <span>Chapter Cover Images</span>
                                      <Button
                                        target={() => imgFA.push("")}
                                        type="button"
                                        btnType="button"
                                        text="Image Url"
                                        icon={<PlusIcon className="w-4 h-4" />}
                                      />
                                    </div>
                                    {chapter.imageUrls.length > 0 &&
                                      chapter.imageUrls.map(
                                        (coverImg, i_idx) => (
                                          <FormField
                                            key={i_idx}
                                            name={`chapters.${c_idx}.imageUrls.${i_idx}`}
                                            placeholder="Cover image URL"
                                            title="Image URL"
                                          />
                                        )
                                      )}
                                  </div>
                                )}
                              </FieldArray>
                              <FieldArray name={`chapters.${c_idx}.audioUrls`}>
                                {(audioFA) => (
                                  <div className="flex flex-col">
                                    <div className="flex justify-between items-center border-b pb-2">
                                      <span>Audio URLs</span>
                                      <Button
                                        target={() => audioFA.push("")}
                                        type="button"
                                        btnType="button"
                                        text="URL"
                                        icon={<PlusIcon className="w-4 h-4" />}
                                      />
                                    </div>
                                    {chapter.audioUrls.length > 0 &&
                                      chapter.audioUrls.map(
                                        (audioUrl, a_idx) => (
                                          <FormField
                                            key={c_idx}
                                            name={`chapters.${c_idx}.audioUrls.${a_idx}`}
                                            placeholder="Chapter Audio URL"
                                            title="Audio URL"
                                          />
                                        )
                                      )}
                                  </div>
                                )}
                              </FieldArray>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </FieldArray>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
