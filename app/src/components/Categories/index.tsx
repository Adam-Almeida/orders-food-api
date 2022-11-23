import { useState } from "react";
import { FlatList } from "react-native";

import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Icon } from "./styles";

export function Categories() {
    const [selectedCategory, setSelectedCategory] = useState("");

    function handleSelectCategory(categoryId: string) {
        setSelectedCategory(categoryId);
    }

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ paddingRight: 24 }}
            data={categories}
            keyExtractor={(category) => category._id}
            renderItem={({ item: category }) => {
                const isSelected = selectedCategory === category._id;

                return (
                    <Category
                        onPress={() => handleSelectCategory(category._id)}
                    >
                        <Icon>
                            <Text opacity={isSelected ? 1 : 0.5}>
                                {category.icon}
                            </Text>
                        </Icon>
                        <Text
                            opacity={isSelected ? 1 : 0.5}
                            size={14}
                            weight="600"
                        >
                            {category.name}
                        </Text>
                    </Category>
                );
            }}
        />
    );
}
