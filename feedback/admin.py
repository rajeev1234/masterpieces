from django.contrib import admin

from .models import Lead


class PostModelAdmin(admin.ModelAdmin):
    list_display = ["email", "created_at"]
    list_display_links = ["created_at"]
    list_editable = ["email"]
    list_filter = ["email", "created_at"]

    search_fields = ["email"]

    class Meta:
        model = Lead


admin.site.register(Lead, PostModelAdmin)